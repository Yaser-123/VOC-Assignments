import random
import string

# Generate character mappings
chars = " " + string.punctuation + string.digits + string.ascii_letters
chars = list(chars)

key = chars.copy()
random.shuffle(key)

while True:
    choice = input("1. To Encrypt\n2. To Decrypt\n3. To Exit\nChoose an option: ")

    if choice == "1":
        value = input("Enter the text to encrypt: ")
        cipher = ""

        # Encryption
        for letter in value:
            if letter in chars:
                index = chars.index(letter)
                cipher += key[index]
            else:
                cipher += letter  # If letter not in chars, add it as is
        print("Encrypted text:", cipher)

    elif choice == "2":
        value2 = input("Enter the text to decrypt: ")
        answer = ""

        # Decryption
        for letter in value2:
            if letter in key:
                index = key.index(letter)
                answer += chars[index]
            else:
                answer += letter  # If letter not in key, add it as is
        print("Decrypted text:", answer)

    elif choice == "3":
        print("Exiting...")
        break

    else:
        print("Invalid option. Please choose 1, 2, or 3.")
