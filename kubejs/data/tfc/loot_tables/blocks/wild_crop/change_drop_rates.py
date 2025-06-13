from os import listdir
from os.path import isfile, join
import sys, json

PROB = 0.5
MIN = 1
MAX = 1

files = [f for f in listdir(".") if isfile(join(".", f))]
files.remove("change_drop_rates.py")

a = [{"function": "minecraft:set_count", "count": {"n": 1, "p": PROB, "type": "minecraft:binomial"}}]

spawn_rates = []
texts = []

for file in files:
    text = ""

    with open(file, "r+") as json_data:
        data = json.load(json_data)

        data["pools"][-1]["entries"][0]["functions"] = a
        
        if len(data["pools"]) > 1:
            data["pools"][0]["entries"][0]["functions"][0]["count"]["min"] = MIN
            data["pools"][0]["entries"][0]["functions"][0]["count"]["max"] = MAX
                        
        json_data.seek(0)        # <--- should reset file position to the beginning.
        json.dump(data, json_data, indent=4)
        json_data.truncate()     # remove remaining part            
    

