from os import listdir
from os.path import isfile, join
from math import exp

import json
import sys

AMOUNT = 4

files = [f for f in listdir(".") if isfile(join(".", f))]
files.remove("change_plants_patch_size.py")

for file in files:
    with open(file, "r") as f:
        data = json.load(f)

    data["config"]["tries"] = AMOUNT

    with open(file, "w") as f:
        json.dump(data, f, indent=2)
