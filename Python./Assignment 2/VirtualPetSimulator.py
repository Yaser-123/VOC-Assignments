import random

class VirtualPet:
    def __init__(self, name):
        self.name = name
        self.happiness = 50
        self.hunger = 50

    def feed(self):
        if self.hunger > 0:
            self.hunger -= 10
            self.happiness -= 5
            print(f"{self.name} enjoyed the meal! Hunger decreased but happiness slightly decreased.")
        else:
            print(f"{self.name} is not hungry right now!")

    def play(self):
        if self.happiness < 100:
            self.happiness += 10
            self.hunger += 5
            print(f"{self.name} had fun playing! Happiness increased but hunger slightly increased.")
        else:
            print(f"{self.name} is already very happy!")

    def check_status(self):
        print(f"{self.name}'s Status:\nHappiness: {self.happiness}\nHunger: {self.hunger}")

    def time_passes(self):
        self.hunger += 5
        self.happiness -= 5
        print(f"Time passes... {self.name}'s hunger and happiness have changed.")

    def is_game_over(self):
        if self.hunger >= 100:
            print(f"{self.name} has become too hungry. Game over!")
            return True
        elif self.happiness <= 0:
            print(f"{self.name} is too sad. Game over!")
            return True
        return False

def main():
    print("Welcome to the Virtual Pet Simulator!")
    pet_name = input("What would you like to name your pet? ")
    pet = VirtualPet(pet_name)

    while True:
        print("\nWhat would you like to do?")
        print("1. Feed your pet")
        print("2. Play with your pet")
        print("3. Check your pet's status")
        print("4. Quit")

        choice = input("Enter your choice: ")

        if choice == "1":
            pet.feed()
        elif choice == "2":
            pet.play()
        elif choice == "3":
            pet.check_status()
        elif choice == "4":
            print(f"Goodbye! Take care of {pet.name}!")
            break
        else:
            print("Invalid choice. Please select a valid option.")

        # Simulate time passing every 3 actions
        if random.randint(1, 3) == 3:
            pet.time_passes()

        # Check if the game is over
        if pet.is_game_over():
            break

if __name__ == "__main__":
    main()
