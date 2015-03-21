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


#include "settings.h"
#include "ui_settings.h"
#include <QShortcut>
#include <QDebug>
#include <QFile>

Settings::Settings(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Settings)
{
    ui->setupUi(this);

    QShortcut *x0 = new QShortcut(QKeySequence("a"), this);
    QShortcut *x1 = new QShortcut(QKeySequence("s"), this);
    QShortcut *y0 = new QShortcut(QKeySequence("q"), this);
    QShortcut *y1 = new QShortcut(QKeySequence("w"), this);

    QObject::connect(x0, SIGNAL(activated()), this, SLOT(on_x0()));
    QObject::connect(x1, SIGNAL(activated()), this, SLOT(on_x1()));
    QObject::connect(y0, SIGNAL(activated()), this, SLOT(on_y0()));
    QObject::connect(y1, SIGNAL(activated()), this, SLOT(on_y1()));

    setRefresh();
}

Settings::~Settings()
{
    delete ui;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::on_pushButton_done_clicked()
{
    QFile file("boardCfg");
    file.open(QIODevice::WriteOnly | QIODevice::Text);
    QTextStream out(&file);
    out << x0_pos.rx()<<"\n"<< x0_pos.ry()<<"\n"
        << x1_pos.rx()<<"\n"<< x1_pos.ry()<<"\n"
        << y0_pos.rx()<<"\n"<< y0_pos.ry()<<"\n"
        << y1_pos.rx()<<"\n"<< y1_pos.ry()<<"\n";
    file.close();

    this->close();
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::on_x0()
{
    QPoint pos = QCursor::pos();
    x0_pos = pos;
    qDebug()<<pos;

    ui->label_X0Pos->setText(QString::number(pos.rx())+", "+
                             QString::number(pos.ry()));
    ui->label_statusX0->setStyleSheet("QLabel {color : red; }");
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::on_x1()
{
    QPoint pos = QCursor::pos();
    x1_pos = pos;
    qDebug()<<pos;

    ui->label_X1Pos->setText(QString::number(pos.rx())+", "+
                             QString::number(pos.ry()));
    ui->label_statusX1->setStyleSheet("QLabel {color : red; }");
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::on_y0()
{
    QPoint pos = QCursor::pos();
    y0_pos = pos;
    qDebug()<<pos;

    ui->label_Y0Pos->setText(QString::number(pos.rx())+", "+
                             QString::number(pos.ry()));
    ui->label_statusY0->setStyleSheet("QLabel {color : red; }");
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::on_y1()
{
    QPoint pos = QCursor::pos();
    y1_pos = pos;
    qDebug()<<pos;

    ui->label_Y1Pos->setText(QString::number(pos.rx())+", "+
                             QString::number(pos.ry()));
    ui->label_statusY1->setStyleSheet("QLabel {color : red; }");
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::on_pushButton_refresh_clicked()
{
    setRefresh();
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Function:
* Notes:
* Arguments: none
*/
void Settings::setRefresh()
{
    ui->label_X0Pos->setText("");
    ui->label_X1Pos->setText("");
    ui->label_Y0Pos->setText("");
    ui->label_Y1Pos->setText("");

    ui->label_statusX0->setStyleSheet("QLabel {color : blue; }");
    ui->label_statusX1->setStyleSheet("QLabel {color : blue; }");
    ui->label_statusY0->setStyleSheet("QLabel {color : blue; }");
    ui->label_statusY1->setStyleSheet("QLabel {color : blue; }");
}
