#!/usr/bin/env bash 

input="public/source_full.csv"
while IFS= read -r line
do 
  name=${line#"https://s3.amazonaws.com/zbrain/ZBrain/"}
  name=${name%"/info"}
  echo $name 
  echo $name >> "./public/source_short.csv"
done < "$input"
