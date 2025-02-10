# Mysterious-Organism
CodeCademy Challenge Project: Mysterious Organism

Pila Aequor DNA Simulation

Overview

This project simulates the DNA of a newly discovered deep-sea organism called Pila aequor. Due to its unique mutation patterns and inability to survive above sea level, we generate and analyze simulated DNA strands using JavaScript.

Project Goals

Simulate P. aequor DNA sequences.

Implement functions to mutate DNA, compare sequences, and determine survival probability.

Generate a collection of viable specimens.

Implement a complementary DNA strand method.

Find the two most related specimens based on DNA similarity.

Features

1. Generate Random DNA Strands

Each organism has a DNA sequence composed of 15 bases, randomly selected from ['A', 'T', 'C', 'G'].

2. Factory Function: pAequorFactory

This function generates an organism with the following methods:

mutate(): Changes one random DNA base to a different one.

compareDNA(otherOrganism): Compares the DNA of two specimens and calculates their similarity.

willLikelySurvive(): Determines if a specimen has at least 60% 'C' or 'G' bases, increasing its survival probability.

complementStrand(): Generates the complementary DNA strand (A ↔ T, C ↔ G).

3. Generate 30 Viable Specimens

A collection of 30 specimens that are likely to survive is created.

4. Find the Two Most Related Specimens

The program compares all specimens and finds the pair with the highest DNA similarity percentage.

Usage

Running the Code

Copy the JavaScript code into a file (e.g., pilaAequor.js).

Run the file using Node.js:

node pilaAequor.js

The console will display generated DNA sequences, mutations, survival checks, and the most related specimens.

Example Output

Original DNA: ['A', 'C', 'G', 'T', 'G', 'A', 'C', 'C', 'T', 'G', 'A', 'T', 'C', 'G', 'A']
Complementary DNA: ['T', 'G', 'C', 'A', 'C', 'T', 'G', 'G', 'A', 'C', 'T', 'A', 'G', 'C', 'T']
Specimen #3 and Specimen #8 have 86.67% DNA in common.
The two most related specimens are #3 and #8 with 86.67% similarity.

Future Enhancements

Implement genetic inheritance for offspring simulation.

Introduce additional mutation probabilities.

Visualize DNA sequences and survival rates with a UI.

Technologies Used

JavaScript (Node.js)
