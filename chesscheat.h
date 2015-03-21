#ifndef CHESSCHEAT_H
#define CHESSCHEAT_H

#include <QMainWindow>

namespace Ui {
class chessCheat;
}

class chessCheat : public QMainWindow
{
    Q_OBJECT

public:
    explicit chessCheat(QWidget *parent = 0);
    ~chessCheat();

    QString startProcess(QString cmd, QStringList arg);


private slots:

    void clipboardChanged();

    void on_pushButton_delBuf_clicked();

    void on_pushButton_stopSim_clicked();

    void on_pushButton_settings_clicked();

    void on_checkBox_white_clicked(bool checked);

    void on_checkBox_recordClipb_clicked(bool checked);

private:
    Ui::chessCheat *ui;

    QString startSimulation(QString movesFileName);

    QVector<int> chessMatrix_x;
    QVector<int> chessMatrix_y;


    QList<int> readBoardCfg();

    void constructBoardMap();

    QStringList convertToGeometry(QString from, QString to, bool white);

    bool recordClipboard;


};

#endif // CHESSCHEAT_H
