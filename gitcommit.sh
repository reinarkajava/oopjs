#!/bin/bash


read -p "Sonum:" message

echo $message

git add -A

git commit -m "$message"

git push -u origin main
