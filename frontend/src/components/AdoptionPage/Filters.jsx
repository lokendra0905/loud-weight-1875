import React, { useEffect, useState } from "react";
import "./Filters.css";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAdoptionData } from "../../Redux/adoptionReducer/action";



const arr = [
  {
    dogs_breed: "Affenpinscher",
  },
  {
    dogs_breed: "Afghan Hound",
  },
  {
    dogs_breed: "Airedale Terrier",
  },
  {
    dogs_breed: "Akbash",
  },
  {
    dogs_breed: "Akita",
  },
  {
    dogs_breed: "Alaskan Malamute",
  },
  {
    dogs_breed: "American Bulldog",
  },
  {
    dogs_breed: "American Bully",
  },
  {
    dogs_breed: "American Eskimo Dog",
  },
  {
    dogs_breed: "American Foxhound",
  },
  {
    dogs_breed: "American Hairless Terrier",
  },
  {
    dogs_breed: "American Staffordshire Terrier",
  },
  {
    dogs_breed: "American Water Spaniel",
  },
  {
    dogs_breed: "Anatolian Shepherd",
  },
  {
    dogs_breed: "Appenzell Mountain Dog",
  },
  {
    dogs_breed: "Aussiedoodle",
  },
  {
    dogs_breed: "Australian Cattle Dog / Blue Heeler",
  },
  {
    dogs_breed: "Australian Kelpie",
  },
  {
    dogs_breed: "Australian Shepherd",
  },
  {
    dogs_breed: "Australian Terrier",
  },
  {
    dogs_breed: "Basenji",
  },
  {
    dogs_breed: "Basset Hound",
  },
  {
    dogs_breed: "Beagle",
  },
  {
    dogs_breed: "Bearded Collie",
  },
  {
    dogs_breed: "Beauceron",
  },
  {
    dogs_breed: "Bedlington Terrier",
  },
  {
    dogs_breed: "Belgian Shepherd / Laekenois",
  },
  {
    dogs_breed: "Belgian Shepherd / Malinois",
  },
  {
    dogs_breed: "Belgian Shepherd / Sheepdog",
  },
  {
    dogs_breed: "Belgian Shepherd / Tervuren",
  },
  {
    dogs_breed: "Bernedoodle",
  },
  {
    dogs_breed: "Bernese Mountain Dog",
  },
  {
    dogs_breed: "Bichon Frise",
  },
  {
    dogs_breed: "Black and Tan Coonhound",
  },
  {
    dogs_breed: "Black Labrador Retriever",
  },
  {
    dogs_breed: "Black Mouth Cur",
  },
  {
    dogs_breed: "Black Russian Terrier",
  },
  {
    dogs_breed: "Bloodhound",
  },
  {
    dogs_breed: "Blue Lacy",
  },
  {
    dogs_breed: "Bluetick Coonhound",
  },
  {
    dogs_breed: "Boerboel",
  },
  {
    dogs_breed: "Bolognese",
  },
  {
    dogs_breed: "Border Collie",
  },
  {
    dogs_breed: "Border Terrier",
  },
  {
    dogs_breed: "Borzoi",
  },
  {
    dogs_breed: "Boston Terrier",
  },
  {
    dogs_breed: "Bouvier des Flandres",
  },
  {
    dogs_breed: "Boxer",
  },
  {
    dogs_breed: "Boykin Spaniel",
  },
  {
    dogs_breed: "Briard",
  },
  {
    dogs_breed: "Brittany Spaniel",
  },
  {
    dogs_breed: "Brussels Griffon",
  },
  {
    dogs_breed: "Bull Terrier",
  },
  {
    dogs_breed: "Bullmastiff",
  },
  {
    dogs_breed: "Cairn Terrier",
  },
  {
    dogs_breed: "Canaan Dog",
  },
  {
    dogs_breed: "Cane Corso",
  },
  {
    dogs_breed: "Cardigan Welsh Corgi",
  },
  {
    dogs_breed: "Carolina Dog",
  },
  {
    dogs_breed: "Catahoula Leopard Dog",
  },
  {
    dogs_breed: "Cattle Dog",
  },
  {
    dogs_breed: "Caucasian Sheepdog / Caucasian Ovtcharka",
  },
  {
    dogs_breed: "Cavachon",
  },
  {
    dogs_breed: "Cavalier King Charles Spaniel",
  },
  {
    dogs_breed: "Cavapoo",
  },
  {
    dogs_breed: "Chesapeake Bay Retriever",
  },
  {
    dogs_breed: "Chihuahua",
  },
  {
    dogs_breed: "Chinese Crested Dog",
  },
  {
    dogs_breed: "Chinese Foo Dog",
  },
  {
    dogs_breed: "Chinook",
  },
  {
    dogs_breed: "Chiweenie",
  },
  {
    dogs_breed: "Chocolate Labrador Retriever",
  },
  {
    dogs_breed: "Chow Chow",
  },
  {
    dogs_breed: "Cirneco dell'Etna",
  },
  {
    dogs_breed: "Clumber Spaniel",
  },
  {
    dogs_breed: "Cockapoo",
  },
  {
    dogs_breed: "Cocker Spaniel",
  },
  {
    dogs_breed: "Collie",
  },
  {
    dogs_breed: "Coonhound",
  },
  {
    dogs_breed: "Corgi",
  },
  {
    dogs_breed: "Coton de Tulear",
  },
  {
    dogs_breed: "Curly-Coated Retriever",
  },
  {
    dogs_breed: "Dachshund",
  },
  {
    dogs_breed: "Dalmatian",
  },
  {
    dogs_breed: "Dandie Dinmont Terrier",
  },
  {
    dogs_breed: "Doberman Pinscher",
  },
  {
    dogs_breed: "Dogo Argentino",
  },
  {
    dogs_breed: "Dogue de Bordeaux",
  },
  {
    dogs_breed: "Dutch Shepherd",
  },
  {
    dogs_breed: "English Bulldog",
  },
  {
    dogs_breed: "English Cocker Spaniel",
  },
  {
    dogs_breed: "English Coonhound",
  },
  {
    dogs_breed: "English Foxhound",
  },
  {
    dogs_breed: "English Pointer",
  },
  {
    dogs_breed: "English Setter",
  },
  {
    dogs_breed: "English Shepherd",
  },
  {
    dogs_breed: "English Springer Spaniel",
  },
  {
    dogs_breed: "English Toy Spaniel",
  },
  {
    dogs_breed: "Entlebucher",
  },
  {
    dogs_breed: "Eskimo Dog",
  },
  {
    dogs_breed: "Feist",
  },
  {
    dogs_breed: "Field Spaniel",
  },
  {
    dogs_breed: "Fila Brasileiro",
  },
  {
    dogs_breed: "Finnish Lapphund",
  },
  {
    dogs_breed: "Finnish Spitz",
  },
  {
    dogs_breed: "Flat-Coated Retriever",
  },
  {
    dogs_breed: "Fox Terrier",
  },
  {
    dogs_breed: "Foxhound",
  },
  {
    dogs_breed: "French Bulldog",
  },
  {
    dogs_breed: "Galgo Spanish Greyhound",
  },
  {
    dogs_breed: "German Pinscher",
  },
  {
    dogs_breed: "German Shepherd Dog",
  },
  {
    dogs_breed: "German Shorthaired Pointer",
  },
  {
    dogs_breed: "German Spitz",
  },
  {
    dogs_breed: "German Wirehaired Pointer",
  },
  {
    dogs_breed: "Giant Schnauzer",
  },
  {
    dogs_breed: "Glen of Imaal Terrier",
  },
  {
    dogs_breed: "Golden Retriever",
  },
  {
    dogs_breed: "Goldendoodle",
  },
  {
    dogs_breed: "Gordon Setter",
  },
  {
    dogs_breed: "Great Dane",
  },
  {
    dogs_breed: "Great Pyrenees",
  },
  {
    dogs_breed: "Greater Swiss Mountain Dog",
  },
  {
    dogs_breed: "Greyhound",
  },
  {
    dogs_breed: "Hamiltonstovare",
  },
  {
    dogs_breed: "Harrier",
  },
  {
    dogs_breed: "Havanese",
  },
  {
    dogs_breed: "Hound",
  },
  {
    dogs_breed: "Hovawart",
  },
  {
    dogs_breed: "Husky",
  },
  {
    dogs_breed: "Ibizan Hound",
  },
  {
    dogs_breed: "Icelandic Sheepdog",
  },
  {
    dogs_breed: "Illyrian Sheepdog",
  },
  {
    dogs_breed: "Irish Setter",
  },
  {
    dogs_breed: "Irish Terrier",
  },
  {
    dogs_breed: "Irish Water Spaniel",
  },
  {
    dogs_breed: "Irish Wolfhound",
  },
  {
    dogs_breed: "Italian Greyhound",
  },
  {
    dogs_breed: "Jack Russell Terrier",
  },
  {
    dogs_breed: "Japanese Chin",
  },
  {
    dogs_breed: "Jindo",
  },
  {
    dogs_breed: "Kai Dog",
  },
  {
    dogs_breed: "Karelian Bear Dog",
  },
  {
    dogs_breed: "Keeshond",
  },
  {
    dogs_breed: "Kerry Blue Terrier",
  },
  {
    dogs_breed: "Kishu",
  },
  {
    dogs_breed: "Klee Kai",
  },
  {
    dogs_breed: "Komondor",
  },
  {
    dogs_breed: "Kuvasz",
  },
  {
    dogs_breed: "Kyi Leo",
  },
  {
    dogs_breed: "Labradoodle",
  },
  {
    dogs_breed: "Labrador Retriever",
  },
  {
    dogs_breed: "Lakeland Terrier",
  },
  {
    dogs_breed: "Lancashire Heeler",
  },
  {
    dogs_breed: "Leonberger",
  },
  {
    dogs_breed: "Lhasa Apso",
  },
  {
    dogs_breed: "Lowchen",
  },
  {
    dogs_breed: "Lurcher",
  },
  {
    dogs_breed: "Maltese",
  },
  {
    dogs_breed: "Maltipoo",
  },
  {
    dogs_breed: "Manchester Terrier",
  },
  {
    dogs_breed: "Maremma Sheepdog",
  },
  {
    dogs_breed: "Mastiff",
  },
  {
    dogs_breed: "McNab",
  },
  {
    dogs_breed: "Miniature Bull Terrier",
  },
  {
    dogs_breed: "Miniature Dachshund",
  },
  {
    dogs_breed: "Miniature Pinscher",
  },
  {
    dogs_breed: "Miniature Poodle",
  },
  {
    dogs_breed: "Miniature Schnauzer",
  },
  {
    dogs_breed: "Mixed Breed",
  },
  {
    dogs_breed: "Morkie",
  },
  {
    dogs_breed: "Mountain Cur",
  },
  {
    dogs_breed: "Mountain Dog",
  },
  {
    dogs_breed: "Munsterlander",
  },
  {
    dogs_breed: "Neapolitan Mastiff",
  },
  {
    dogs_breed: "New Guinea Singing Dog",
  },
  {
    dogs_breed: "Newfoundland Dog",
  },
  {
    dogs_breed: "Norfolk Terrier",
  },
  {
    dogs_breed: "Norwegian Buhund",
  },
  {
    dogs_breed: "Norwegian Elkhound",
  },
  {
    dogs_breed: "Norwegian Lundehund",
  },
  {
    dogs_breed: "Norwich Terrier",
  },
  {
    dogs_breed: "Nova Scotia Duck Tolling Retriever",
  },
  {
    dogs_breed: "Old English Sheepdog",
  },
  {
    dogs_breed: "Otterhound",
  },
  {
    dogs_breed: "Papillon",
  },
  {
    dogs_breed: "Parson Russell Terrier",
  },
  {
    dogs_breed: "Patterdale Terrier / Fell Terrier",
  },
  {
    dogs_breed: "Pekingese",
  },
  {
    dogs_breed: "Pembroke Welsh Corgi",
  },
  {
    dogs_breed: "Peruvian Inca Orchid",
  },
  {
    dogs_breed: "Petit Basset Griffon Vendeen",
  },
  {
    dogs_breed: "Pharaoh Hound",
  },
  {
    dogs_breed: "Pit Bull Terrier",
  },
  {
    dogs_breed: "Plott Hound",
  },
  {
    dogs_breed: "Pointer",
  },
  {
    dogs_breed: "Polish Lowland Sheepdog",
  },
  {
    dogs_breed: "Pomeranian",
  },
  {
    dogs_breed: "Pomsky",
  },
  {
    dogs_breed: "Poodle",
  },
  {
    dogs_breed: "Portuguese Podengo",
  },
  {
    dogs_breed: "Portuguese Water Dog",
  },
  {
    dogs_breed: "Presa Canario",
  },
  {
    dogs_breed: "Pug",
  },
  {
    dogs_breed: "Puggle",
  },
  {
    dogs_breed: "Puli",
  },
  {
    dogs_breed: "Pumi",
  },
  {
    dogs_breed: "Pyrenean Shepherd",
  },
  {
    dogs_breed: "Rat Terrier",
  },
  {
    dogs_breed: "Redbone Coonhound",
  },
  {
    dogs_breed: "Retriever",
  },
  {
    dogs_breed: "Rhodesian Ridgeback",
  },
  {
    dogs_breed: "Rottweiler",
  },
  {
    dogs_breed: "Rough Collie",
  },
  {
    dogs_breed: "Saint Bernard",
  },
  {
    dogs_breed: "Saluki",
  },
  {
    dogs_breed: "Samoyed",
  },
  {
    dogs_breed: "Sarplaninac",
  },
  {
    dogs_breed: "Schipperke",
  },
  {
    dogs_breed: "Schnauzer",
  },
  {
    dogs_breed: "Schnoodle",
  },
  {
    dogs_breed: "Scottish Deerhound",
  },
  {
    dogs_breed: "Scottish Terrier",
  },
  {
    dogs_breed: "Sealyham Terrier",
  },
  {
    dogs_breed: "Setter",
  },
  {
    dogs_breed: "Shar-Pei",
  },
  {
    dogs_breed: "Sheep Dog",
  },
  {
    dogs_breed: "Sheepadoodle",
  },
  {
    dogs_breed: "Shepherd",
  },
  {
    dogs_breed: "Shetland Sheepdog / Sheltie",
  },
  {
    dogs_breed: "Shiba Inu",
  },
  {
    dogs_breed: "Shih poo",
  },
  {
    dogs_breed: "Shih Tzu",
  },
  {
    dogs_breed: "Shollie",
  },
  {
    dogs_breed: "Siberian Husky",
  },
  {
    dogs_breed: "Silky Terrier",
  },
  {
    dogs_breed: "Skye Terrier",
  },
  {
    dogs_breed: "Sloughi",
  },
  {
    dogs_breed: "Smooth Collie",
  },
  {
    dogs_breed: "Smooth Fox Terrier",
  },
  {
    dogs_breed: "South Russian Ovtcharka",
  },
  {
    dogs_breed: "Spaniel",
  },
  {
    dogs_breed: "Spanish Water Dog",
  },
  {
    dogs_breed: "Spinone Italiano",
  },
  {
    dogs_breed: "Spitz",
  },
  {
    dogs_breed: "Staffordshire Bull Terrier",
  },
  {
    dogs_breed: "Standard Poodle",
  },
  {
    dogs_breed: "Standard Schnauzer",
  },
  {
    dogs_breed: "Sussex Spaniel",
  },
  {
    dogs_breed: "Swedish Vallhund",
  },
  {
    dogs_breed: "Tennessee Treeing Brindle",
  },
  {
    dogs_breed: "Terrier",
  },
  {
    dogs_breed: "Thai Ridgeback",
  },
  {
    dogs_breed: "Tibetan Mastiff",
  },
  {
    dogs_breed: "Tibetan Spaniel",
  },
  {
    dogs_breed: "Tibetan Terrier",
  },
  {
    dogs_breed: "Tosa Inu",
  },
  {
    dogs_breed: "Toy Fox Terrier",
  },
  {
    dogs_breed: "Toy Manchester Terrier",
  },
  {
    dogs_breed: "Treeing Walker Coonhound",
  },
  {
    dogs_breed: "Vizsla",
  },
  {
    dogs_breed: "Weimaraner",
  },
  {
    dogs_breed: "Welsh Springer Spaniel",
  },
  {
    dogs_breed: "Welsh Terrier",
  },
  {
    dogs_breed: "West Highland White Terrier / Westie",
  },
  {
    dogs_breed: "Wheaten Terrier",
  },
  {
    dogs_breed: "Whippet",
  },
  {
    dogs_breed: "White German Shepherd",
  },
  {
    dogs_breed: "Wire Fox Terrier",
  },
  {
    dogs_breed: "Wirehaired Pointing Griffon",
  },
  {
    dogs_breed: "Wirehaired Terrier",
  },
  {
    dogs_breed: "Xoloitzcuintli / Mexican Hairless",
  },
  {
    dogs_breed: "Yellow Labrador Retriever",
  },
  {
    dogs_breed: "Yorkshire Terrier",
  },
];

const Filters = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  console.log(breed);
  let store = useSelector((store) => store.adoptionPetsReducer.adoptionData);
  console.log(store);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      params: {
        gender,
        age,
        breed,
      },
    };
    dispatch(getAdoptionData(data));
  }, [gender]);
  return (
    <div className="FilterDiv">
      <Box className="FilterBox">
        <label>Breed</label>
        <select onChange={(e) => setBreed(e.target.value)}>
          <option className="optionAny">Any</option>
          {arr.map((el) => (
            <option value={el.dogs_breed}>{el.dogs_breed}</option>
          ))}
        </select>
      </Box>

      <Box className="FilterBox">
        <label>Age</label>
        <select onChange={(e) => setAge(e.target.value)}>
          <option className="optionAny">Any</option>
          <option value="Puppy">Puppy</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
      </Box>

      <Box className="FilterBox">
        <label>Gender</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option className="optionAny">Any</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </Box>

      <Box className="FilterBox">
        <label>GOOD WITH</label>
        <select>
          <option className="optionAny">any</option>
          <option value="Kids">Kids</option>
          <option value="Other Dogs">Other Dogs</option>
          <option value="Cats">Cats</option>
        </select>
      </Box>

      {/* <Box className='FilterBox'>
        <label>Color</label>
        <select  >
          <option className='optionAny'>any</option>
          <option value="Male">Kids</option>
          <option value="Female">Other Dogs</option>
          <option value="Female">Cats</option>
        </select>
      </Box> */}

      <Box className="FilterBox">
        <label>CARE & BEHAVIOR</label>
        <select>
          <option className="optionAny">Any</option>
          <option value="House-trained">House-trained</option>
          <option value="Specail Needs">Special Needs</option>
        </select>
      </Box>

      <Box className="FilterBox">
        <label>DAYS ON PETFINDER</label>
        <select>
          <option className="optionAny">Any</option>
          <option value="1">1</option>
          <option value="7">7</option>
          <option value="14">14</option>
          <option value="30+">30+</option>
        </select>
      </Box>
    </div>
  );
};

export default Filters;
