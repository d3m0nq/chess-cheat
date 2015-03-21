#ifndef SETTINGS_H
#define SETTINGS_H

#include <QDialog>

namespace Ui {
class Settings;
}

class Settings : public QDialog
{
    Q_OBJECT

public:
    explicit Settings(QWidget *parent = 0);
    ~Settings();

private slots:
    void on_pushButton_done_clicked();

    void on_x0();
    void on_x1();
    void on_y0();
    void on_y1();

    void on_pushButton_refresh_clicked();

private:
    Ui::Settings *ui;

    QPoint x0_pos,
           x1_pos,
           y0_pos,
           y1_pos;

    void setRefresh();
};

#endif // SETTINGS_H
