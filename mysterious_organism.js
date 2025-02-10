// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
      return {
          specimenNum,
          dna,
          
          mutate() {
              let index = Math.floor(Math.random() * this.dna.length);
              let newBase = returnRandBase();
              while (this.dna[index] === newBase) {
                  newBase = returnRandBase();
              }
              this.dna[index] = newBase;
              return this.dna;
          },
  
          compareDNA(otherOrganism) {
              let commonBases = this.dna.reduce((count, base, index) => {
                  return base === otherOrganism.dna[index] ? count + 1 : count;
              }, 0);
              let similarity = ((commonBases / this.dna.length) * 100).toFixed(2);
              console.log(`Specimen #${this.specimenNum} and Specimen #${otherOrganism.specimenNum} have ${similarity}% DNA in common.`);
              return similarity;
          },
  
          willLikelySurvive() {
              let survivalBases = this.dna.filter(base => base === 'C' || base === 'G').length;
              return (survivalBases / this.dna.length) >= 0.6;
          },
  
          complementStrand() {
              const complementaryBases = {
                  'A': 'T',
                  'T': 'A',
                  'C': 'G',
                  'G': 'C'
              };
              return this.dna.map(base => complementaryBases[base]);
          }
      };
  };
  
  // Example usage:
  const sample = pAequorFactory(1, mockUpStrand());
  console.log(`Original DNA: ${sample.dna}`);
  console.log(`Complementary DNA: ${sample.complementStrand()}`);
  
  const findMostRelated = (specimens) => {
      let mostRelated = [];
      let highestSimilarity = 0;
  
      for (let i = 0; i < specimens.length; i++) {
          for (let j = i + 1; j < specimens.length; j++) {
              let similarity = specimens[i].compareDNA(specimens[j]);
              if (similarity > highestSimilarity) {
                  highestSimilarity = similarity;
                  mostRelated = [specimens[i], specimens[j]];
              }
          }
      }
  
      console.log(`The two most related specimens are #${mostRelated[0].specimenNum} and #${mostRelated[1].specimenNum} with ${highestSimilarity}% similarity.`);
      return mostRelated;
  };
  
  // Generating 30 surviving specimens
  let survivingSpecimens = [];
  let id = 1;
  
  while (survivingSpecimens.length < 30) {
      let newOrganism = pAequorFactory(id, mockUpStrand());
      if (newOrganism.willLikelySurvive()) {
          survivingSpecimens.push(newOrganism);
      }
      id++;
  }
  
  // Find the most related specimens
  findMostRelated(survivingSpecimens);

