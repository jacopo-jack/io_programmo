#include <stdio.h>
#include <conio.h>
// Definizione dei tipi e variabili
signed int a = 0;
signed int b = 0;
signed int n = 0; //dimensione vettore
enum bool { false, true };  // Tipo booleano personalizzato

// Funzione per inserire i valori
int insert(int i[]) {
    printf("inserisci il numero di elementi: ");
    getch();
    scanf("%d", &n);  // Chiede il numero di elementi
    for (int i = 0; i < n; i++) {
        printf("Inserisci elemento %d: ", i + 1);
        scanf("%d", &i[i]);  // Legge ogni valore dell'array
    }
    return 0;
}

// Funzione per controllare se l'array è ordinato
int is_sorted(int i[]) {
    int sorted = true;
    for (int j = 0; j < n - 1; j++) {
        if (i[j] > i[j + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

int main() {
    int i[100];  // Array con una dimensione massima di 100 elementi
    insert(i);  // Chiamata alla funzione di inserimento
    if (is_sorted(i)) {
        printf("L'array è già ordinato!\n");
    } else {
        printf("L'array non è ordinato.\n");
    }
    return 0;
}
