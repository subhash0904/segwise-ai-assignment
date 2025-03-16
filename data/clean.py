import pandas as pd

# Load CSV
df = pd.read_csv("Segwise Report.csv")

# Convert 'tags' into a structured dictionary
def parse_tags(tag_str):
    tags = {}
    if pd.notna(tag_str):  # Check if tags exist
        for item in tag_str.split(";"):
            key_value = item.split(":")
            if len(key_value) == 2:
                key, value = key_value
                tags[key.strip()] = value.strip()
    return tags

df["tags"] = df["tags"].apply(parse_tags)

# Convert to JSON and save
json_data = df.to_json(orient="records", indent=4)
with open("data.json", "w") as f:
    f.write(json_data)

print("CSV successfully converted to JSON!")
