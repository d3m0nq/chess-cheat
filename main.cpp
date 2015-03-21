#include "chesscheat.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    chessCheat w;
    w.show();

    return a.exec();
}
