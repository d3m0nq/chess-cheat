// Chess cheat engine v.2.1
// Converts short PGN notation, simulates best moves and makes moves
//
// This file is part of the python-chess library.
// Copyright (C) 2015 Paulius Dapkus <pauliusdapkus@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.


#include "chesscheat.h"
#include "ui_chesscheat.h"
#include <qprocess.h>
#include <qdebug.h>
#include <QClipboard>
#include <QThread>
#include "settings.h"
#include <QShortcut>


QString WORKING_DIR = "/home/cyb3r/projects/qtpro/chessCheat2.1/python-chess/";
QString NOTATION_FILE = "/home/cyb3r/projects/qtpro/chessCheat2.1/python-chess/notation";
QString moves;


chessCheat::chessCheat(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::chessCheat)
{
    ui->setupUi(this);
    ui->pBarCpu_1->setValue(100);

    connect(QApplication::clipboard(), SIGNAL(dataChanged()),
             this, SLOT(clipboardChanged()));

    setMouseTracking(true);

    constructBoardMap();

    ui->checkBox_white->setChecked(true);
    ui->checkBox_recordClipb->setChecked(true);

    recordClipboard = true;
}

chessCheat::~chessCheat()
{
    delete ui;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments:
 */
QString chessCheat::startProcess(QString cmd, QStringList arg)
{
    QProcess *myProcess = new QProcess(this);

    myProcess->start(cmd, arg);
    myProcess->waitForFinished(-1);

    QString strOut = myProcess->readAllStandardOutput();


    return strOut;
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments:
 */
void chessCheat::clipboardChanged()
{
    ui->plainTextEdit_movesArena->setPlainText(""); // Removing text buffer

    if(recordClipboard){
        QClipboard *clipboard = QApplication::clipboard();
        QString originalText = clipboard->text();
        qDebug()<<originalText;
        ui->plainTextEdit_movesArena->appendPlainText(originalText);

        QFile file(NOTATION_FILE);
        file.open(QIODevice::WriteOnly | QIODevice::Text);
        QTextStream out(&file);
        out <<originalText;
        file.close();/**/

        startSimulation(NOTATION_FILE);
    }
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
QString chessCheat::startSimulation(QString movesFileName)
{
    // Send to engine
    QString program = WORKING_DIR+"./simulate.py";
    qDebug()<<program;
    QStringList arguments = QStringList()<<movesFileName
                                         <<ui->lEMemHash->text()
                                         <<ui->lEThreads->text()
                                         <<ui->lEDepth->text();

    QProcess *myProcess = new QProcess(this);
    myProcess->start(program,arguments); // Calling engine
    myProcess->waitForFinished(-1);

    QString strOut = myProcess->readAllStandardOutput();
    qDebug()<< "OUTPUT FROM ENGINE:" <<strOut;
    QByteArray  tmp= strOut.toUtf8();

    QString solution;

    qDebug()<<tmp.right(18).left(4);
    if(tmp.right(18).left(4) == "none"){ // if check mate. Engine example: (bestmove f6f2 ponder (none))
        qDebug()<<"Check Mate!! "<<tmp.right(19).left(4);
        solution = tmp.right(31).left(4);
    }
    else
        solution = tmp.right(29).left(4); // For simple move

    qDebug() << "BEST SOLUTION BY ENGINE:" << solution;

    ui->solutionLabel->setText(solution);


    QString firPos;
    firPos.append(solution.at(0));
    firPos.append(solution.at(1));
    QString secPos;
    secPos.append(solution.at(2));
    secPos.append(solution.at(3));

    qDebug()<<" * USING COORDINATES: "<<convertToGeometry(firPos,secPos,ui->checkBox_white->isChecked());
    qDebug()<<startProcess("./m_move.sh", convertToGeometry(firPos,secPos,ui->checkBox_white->isChecked()));/**/


    return solution;
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
QList<int> chessCheat::readBoardCfg()
{
    QList<int> positions;
    QFile inputFile("boardCfg");
    if (inputFile.open(QIODevice::ReadOnly))
    {
       QTextStream in(&inputFile);
       while (!in.atEnd())
       {
           positions.append(in.readLine().toInt());
       }
       inputFile.close();
    }

    return positions;
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
void chessCheat::constructBoardMap()
{
    QList<int> positions;
    positions = readBoardCfg();


    // Map chessMatrix
    chessMatrix_x.resize(8);
    chessMatrix_y.resize(8);


    float dif1 = 0,
          dif2 = 0;

    for(int j = 1; j<9; j++){
        float tmp1,
              tmp2;

        if(j == 1){
            dif1 += ((positions[2]-positions[0])/(16.0));
            tmp1 = positions[0] + dif1;

            dif2 += ((positions[1]-positions[5])/(16.0));
            tmp2 = positions[1] - dif2;
        }
        else{
            dif1 += ((positions[2]-positions[0])/(16.0))*2;
            tmp1 = positions[0] + dif1;

            dif2 += ((positions[1]-positions[5])/(16.0))*2;
            tmp2 = positions[1] - dif2;
        }
        chessMatrix_x[j-1] = tmp1; // write abcdefgh line
        chessMatrix_y[j-1] = tmp2; // write 12345678 line
    }

    // Show Chess Matrix X axis
    for(int a = 0; a<8; a++){
            qDebug()<<chessMatrix_x[a];
    }
    qDebug()<<" - - - - - - - - - - - - - - - - - - - - - - - -";
    // Show Chess Matrix Y axis
    for(int a = 0; a<8; a++){
            qDebug()<<chessMatrix_y[a];
    }
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
QStringList chessCheat::convertToGeometry(QString from, QString to, bool white)
{
    QStringList geom; // sequence FROM(x,y) + TO(x,y)

    QList<char> boardChar;
    boardChar.append('a');
    boardChar.append('b');
    boardChar.append('c');
    boardChar.append('d');
    boardChar.append('e');
    boardChar.append('f');
    boardChar.append('g');
    boardChar.append('h');


    // Searching [From] geometry
    for(int b=0; b<8; b++)
        if(from.at(0) == boardChar[b]){
            qDebug()<<"Found At: "<<boardChar[b];
            for(int dig=1; dig<9; dig++)
                if(from.at(1).digitValue() == dig){
                    qDebug()<<"Found At: "<<dig;
                    if(white){
                        geom.append(QString::number(chessMatrix_x[b])); // from x
                        geom.append(QString::number(chessMatrix_y[dig-1])); // from y
                    }
                    else{
                        geom.append(QString::number(chessMatrix_x[(unsigned int)(~b -4294967288)])); // from x, using reverse digits
                        geom.append(QString::number(chessMatrix_y[(unsigned int)(~(dig-1) -4294967288)])); // from y, using reverse digits
                    }

                }
        }
    // Searching [To] geometry
    for(int b=0; b<8; b++)
        if(to.at(0) == boardChar[b]){
            qDebug()<<"Found At: "<<boardChar[b];
            for(int dig=1; dig<9; dig++)
                if(to.at(1).digitValue() == dig){
                    qDebug()<<"Found At: "<<dig;
                    if(white){
                        geom.append(QString::number(chessMatrix_x[b])); // to x
                        geom.append(QString::number(chessMatrix_y[dig-1])); // to y
                    }
                    else{
                        geom.append(QString::number(chessMatrix_x[(unsigned int)(~b -4294967288)])); // to x, using reverse digits
                        geom.append(QString::number(chessMatrix_y[(unsigned int)(~(dig-1) -4294967288)])); // to y, using reverse digits
                    }
                }
        }

    return geom;
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
void chessCheat::on_pushButton_delBuf_clicked()
{
    ui->plainTextEdit_movesArena->setPlainText("");
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
void chessCheat::on_pushButton_stopSim_clicked()
{
    qDebug()<<startProcess("./m_move.sh", convertToGeometry("b1","c3",true));/**/
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
void chessCheat::on_pushButton_settings_clicked()
{
    Settings settings;
    QList<int> positions;

    settings.exec();

    // @@@ Create Board map
    qDebug()<<readBoardCfg();
    constructBoardMap();
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
void chessCheat::on_checkBox_white_clicked(bool checked)
{
    if(checked)
        ui->pushButton_moveFirMove->setEnabled(true);
    else
        ui->pushButton_moveFirMove->setEnabled(false);
}

 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Function:
 * Notes:
 * Arguments: none
 */
void chessCheat::on_checkBox_recordClipb_clicked(bool checked)
{
    if(checked)
        recordClipboard = true;
    else
        recordClipboard = false;
}
