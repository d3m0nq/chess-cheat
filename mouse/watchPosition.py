#!/usr/bin/python
import pyautogui, sys
import time
from Xlib import X, display

#print pyautogui.size()

while True:
    print pyautogui.position()
    time.sleep(0.2)

#pyautogui.moveTo(151, 34)
#pyautogui.dragTo(180, 34)
#pyautogui.screenshot('my_screenshot.png')
