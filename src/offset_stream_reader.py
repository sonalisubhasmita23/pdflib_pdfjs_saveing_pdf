import sys
import zlib

def read_binary_file_range(file_path, start_offset, end_offset):
    with open(file_path, 'rb') as file:
        # Set the file pointer to the start offset
        file.seek(start_offset, 0)

        # Read the specified range of bytes
        data = file.read(end_offset - start_offset)

    return data

if len(sys.argv) < 4:
    print("Usage: python offset_stream_reader.py <file_path> <start_offset> <end_offset>")
    sys.exit(1)

file_path = sys.argv[1]
start_offset = int(sys.argv[2])
end_offset = int(sys.argv[3])
# Example usage
#file_path = 'path/to/your/file.bin'
# start_offset = 100  # Replace with your desired start offset
# end_offset = 200    # Replace with your desired end offset

binary_data = read_binary_file_range(file_path, start_offset, end_offset)
#s = binary_data.strip(b'\r\n')
#compressed_data = zlib.decompress(s)

with open('font.txt', 'wb') as file:
    file.write(binary_data)

# Now binary_data contains the bytes from start_offset to end_offset in the file
#print(compressed_data)