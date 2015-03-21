#!/usr/bin/python

# Chess PGN notation converter v.0.1
# Converts short PGN notation to long PGN and FEN
#
# This file is part of the python-chess library.
# Copyright (C) 2015 Paulius Dapkus <pauliusdapkus@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#
# USAGE:
#        need to pass the short PGN file [ PGNtoFEN.py short_pgn_file ]
# OOUTPUT:
#        script generates two notation dumps (long PGN and FEN)

import chess
import re
import sys
import os


dump_baseDir = "notationDump/"
if not os.path.exists(dump_baseDir):
    os.makedirs(dump_baseDir)

l_PGN_filename = "long_PGN.dump"
FEN_filename = "FEN.dump"
l_PGN_dump = open(dump_baseDir + l_PGN_filename,'w')
FEN_dump = open(dump_baseDir + FEN_filename,'w')

board = chess.Bitboard()

def insert_newline(string, index):
    return string[:index] + '\n' + string[index:]

with open(sys.argv[1], "r") as ins:
    array = []
    for line in ins:
        array.append(line)

str = ""
strF = ""
for x in range(0, array.__len__()):
    str = array[x].split(".")[1] # Removing characters before "."

    first = re.search("\d", str) # Search for digit

    #print str.__len__()
    if str.__len__() > 4:
        if str[4] == "O" and True is not str[1].isdigit():
            if str[3].isdigit():
                if first:
                    if str[first.start()+1] == "+":
                        strF = insert_newline(str, first.start()+2) # inserting "\n" after "+" (this is for cheks)
                    else:
                        strF = insert_newline(str, first.start()+1) # inserting "\n" after digit
            else:
                strF = insert_newline(str, 5) # inserting "\n" after digit
        elif str[2] == "O":
            strF = insert_newline(str, 2)
        else:
            if first:
                if str[first.start()+1] == "+":
                    strF = insert_newline(str, first.start()+2) # inserting "\n" after "+" (this is for cheks)
                else:
                    strF = insert_newline(str, first.start()+1) # inserting "\n" after digit
        l_PGN_dump.write(strF)
    else:
        l_PGN_dump.write(str)



l_PGN_dump.close()
with open(dump_baseDir + l_PGN_filename, "r") as ia:
    for li in ia:
        print li.strip()
        if li != '\n':
            board.push_san(li.strip())


# Generated FEN
print "\033[93m * Translated short PGN to long PGN and FEN notation\033[0m"
print "\033[93m * All translations exists in [notationDump] dir\033[0m"
print '\033[92m'+board.fen()+'\033[0m'
FEN_dump.write(board.fen()+"\n")

