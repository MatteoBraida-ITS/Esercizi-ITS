class Pizza:
    sapore = ""
    dimensione = 0
    cotta = False

    def inforna(self):
        self.cotta = True

    def taglia (self):
        print("La pizza è tagliata")

    def descrivi(self):
        print(f"il sapore della pizza è {self.sapore} e la dimesione è {self.dimensione}")
        
pizza1 = Pizza()

pizza1.sapore = "Margherita"
pizza1.dimensione = f"{20}cm"

pizza1.descrivi()