from os import listdir
from os.path import isfile, join
from math import exp

import json
import sys

# Every crop will be spawned each 1 in RARITY chunks 
RARITY = 200

files = [f for f in listdir(".") if isfile(join(".", f))]
files.remove("change_plants_rarity.py")

for file in files:
    with open(file, "r") as f:
        data = json.load(f)

    if "chance" in data["placement"][2]:
        data["placement"][2]["chance"] = RARITY

    with open(file, "w") as f:
        json.dump(data, f, indent=2)
