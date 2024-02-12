import os
import json

# Specify the directory containing the lyrics files
lyrics_directory = "lyrics"

# Get a list of all text files in the directory
txt_files = [file for file in os.listdir(lyrics_directory) if file.endswith(".txt")]

# Create a list of dictionaries with title and lyricsPath
songs = [{"title": os.path.splitext(file)[0], "lyricsPath": os.path.join(lyrics_directory, file)} for file in txt_files]

# Save the list as a JSON file
json_path = "songs.json"
with open(json_path, 'w') as json_file:
    json.dump(songs, json_file, indent=4)

print(f"JSON file saved at: {json_path}")
