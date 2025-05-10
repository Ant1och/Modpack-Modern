from os import listdir
from os.path import isfile, join
from math import exp

import json
import sys

sigmoid = lambda x: 1 / (1 + exp(-x))

MULT_EXP = 10**(-100)
MULT_LINEAR = 1.6

formula = lambda x: round(MULT_LINEAR * x / sigmoid(x / MULT_EXP) / 5) * 5

files = [f for f in listdir(".") if isfile(join(".", f))]
files.remove("change_ores_rarity.py")

for file in files:
    with open(file, "r") as f:
        data = json.load(f)

    data["config"]["rarity"] = formula(data["config"]["rarity"])

    with open(file, "w") as f:
        json.dump(data, f, indent=2)
