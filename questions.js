const questions = {         // questions[category][difficulty][quesNum]
    1: {                    // question = questions[category][difficulty][quesNum][0]
        1: {                // options = questions[category][difficulty][quesNum][1-3]['option', status]
            1: {
                0: 'Which shape has 3 lines and 3 angles?',
                1: ['Triangle', 1],
                2: ['Square', 0],
                3: ['Cube', 0]
            },
            2: {
                0: 'Which shape does not have 4 lines in the following?',
                1: ['Triangle', 1],
                2: ['Rectangle', 0],
                3: ['Rhombus', 0]
            },
            3: {
                0: 'What shape is the Earth?',
                1: ['Flat', 0],
                2: ['Circle', 0],
                3: ['Sphere', 1]
            }
        },
        2: {
            1: {
                0: 'Which shape has 3 lines and 3 angles?',
                1: ['Triangle', 1],
                2: ['Square', 0],
                3: ['Cube', 0]
            },
            2: {
                0: 'How many sides does an Octagon have?',
                1: ['7', 0],
                2: ['8', 1],
                3: ['9', 0]
            },
            3: {
                0: 'What shape is the Earth?',
                1: ['Flat', 0],
                2: ['Circle', 0],
                3: ['Sphere', 1]
            },
            4: {
                0: 'Which shape does not have 4 lines in the following?',
                1: ['Triangle', 1],
                2: ['Rectangle', 0],
                3: ['Rhombus', 0]
            },
            5: {
                0: 'What shape is a cricket stadium?',
                1: ['Square', 0],
                2: ['Circle', 1],
                3: ['Rectangle', 0]
            }
        },
        3: {
            1: {
                0: 'Which shape has 3 lines and 3 angles?',
                1: ['Triangle', 1],
                2: ['Square', 0],
                3: ['Cube', 0]
            },
            2: {
                0: 'How many sides does an Octagon have?',
                1: ['7', 0],
                2: ['8', 1],
                3: ['9', 0]
            },
            3: {
                0: 'What shape is the Earth?',
                1: ['Flat', 0],
                2: ['Circle', 0],
                3: ['Sphere', 1]
            },
            4: {
                0: 'Which of the following shapes is a 3D shape',
                1: ['Circle', 0],
                2: ['Octagon', 0],
                3: ['Sphere', 1]
            },
            5: {
                0: 'Which shape is closely associated with a box?',
                1: ['Sphere', 0],
                2: ['Square', 0],
                3: ['Cuboid', 1]
            },
            6: {
                0: 'Which shape does not have 4 lines in the following?',
                1: ['Triangle', 1],
                2: ['Rectangle', 0],
                3: ['Rhombus', 0]
            },
            7: {
                0: 'What shape is a cricket stadium?',
                1: ['Square', 0],
                2: ['Circle', 1],
                3: ['Rectangle', 0]
            }
        }
    },
    2: {
        1: {
            1: {
                0: 'What is the capital of India?',
                1: ['New Delhi', 1],
                2: ['Bangalore', 0],
                3: ['Mumbai', 0]
            },
            2: {
                0: 'What is the capital city of Punjab?',
                1: ['Chandigarh', 1],
                2: ['Ludhiana', 0],
                3: ['Amritsar', 0]
            },
            3: {
                0: 'What are the Himalayas?',
                1: ['A Desert', 0],
                2: ['A Lake', 0],
                3: ['A Mountain Range', 1]
            }
        },
        2: {
            1: {
                0: 'What is the capital of India?',
                1: ['New Delhi', 1],
                2: ['Bangalore', 0],
                3: ['Mumbai', 0]
            },
            2: {
                0: 'What is the capital city of Punjab?',
                1: ['Chandigarh', 1],
                2: ['Ludhiana', 0],
                3: ['Amritsar', 0]
            },
            3: {
                0: 'Which country does not border India?',
                1: ['Nepal', 0],
                2: ['Bhutan', 0],
                3: ['Japan', 1]
            },
            4: {
                0: 'What are the Himalayas?',
                1: ['A Desert', 0],
                2: ['A Lake', 0],
                3: ['A Mountain Range', 1]
            },
            5: {
                0: 'Which city is called the silicon valley of India?',
                1: ['Mumbai', 0],
                2: ['Bangalore', 1],
                3: ['Delhi', 0]
            }
        },
        3: {
            1: {
                0: 'What is the capital of India?',
                1: ['New Delhi', 1],
                2: ['Bangalore', 0],
                3: ['Mumbai', 0]
            },
            2: {
                0: 'What is the capital city of Punjab?',
                1: ['Chandigarh', 1],
                2: ['Ludhiana', 0],
                3: ['Amritsar', 0]
            },
            3: {
                0: 'What area is called the Seven Sisters?',
                1: ['The Middle East', 0],
                2: ['The Carribean', 0],
                3: ['The North Eastern states of India', 1]
            },
            4: {
                0: 'What landmark is surrounded by water from 3 sides?',
                1: ['A Desert', 0],
                2: ['A Bay', 0],
                3: ['A Peninsula', 1]
            },
            5: {
                0: 'Which country does not border India?',
                1: ['Nepal', 0],
                2: ['Bhutan', 0],
                3: ['Japan', 1]
            },
            6: {
                0: 'Which city is called the silicon valley of India?',
                1: ['Mumbai', 0],
                2: ['Bangalore', 1],
                3: ['Delhi', 0]
            },
            7: {
                0: 'What are the Himalayas?',
                1: ['A Desert', 0],
                2: ['A Lake', 0],
                3: ['A Mountain Range', 1]
            }
        }
    },
    3: {
        1: {
            1: {
                0: 'What is 9 + 10?',
                1: ['21', 0],
                2: ['19', 1],
                3: ['17', 0]
            },
            2: {
                0: 'What is 101 - 27?',
                1: ['74', 1],
                2: ['84', 0],
                3: ['64', 0]
            },
            3: {
                0: 'What is 36 / 2?',
                1: ['13', 0],
                2: ['16', 0],
                3: ['18', 1]
            }
        },
        2: {
            1: {
                0: 'What is 101 - 27?',
                1: ['74', 1],
                2: ['84', 0],
                3: ['64', 0]
            },
            2: {
                0: 'How many sides does an Octagon have?',
                1: ['7', 0],
                2: ['8', 1],
                3: ['9', 0]
            },
            3: {
                0: 'What is 20 x 2 + 3?',
                1: ['100', 0],
                2: ['62', 0],
                3: ['43', 1]
            },
            4: {
                0: 'What is 9 + 10?',
                1: ['19', 1],
                2: ['21', 0],
                3: ['23', 0]
            },
            5: {
                0: 'What is 4 ^ 2?',
                1: ['14', 0],
                2: ['16', 1],
                3: ['18', 0]
            }
        },
        3: {
            1: {
                0: 'What is 4 ^ 2?',
                1: ['14', 0],
                2: ['16', 1],
                3: ['18', 0]
            },
            2: {
                0: 'How many sides does an Octagon have?',
                1: ['7', 0],
                2: ['8', 1],
                3: ['9', 0]
            },
            3: {
                0: 'What is 20 x 2 + 3?',
                1: ['100', 0],
                2: ['62', 0],
                3: ['43', 1]
            },
            4: {
                0: 'What is log(9) to the base 3?',
                1: ['0', 0],
                2: ['1', 0],
                3: ['2', 1]
            },
            5: {
                0: 'What is 9 + 10?',
                1: ['19', 1],
                2: ['21', 0],
                3: ['23', 0]
            },
            6: {
                0: 'What is 101 - 27?',
                1: ['74', 1],
                2: ['84', 0],
                3: ['64', 0]
            },
            7: {
                0: 'What is the differential of 2?',
                1: ['0', 1],
                2: ['1', 0],
                3: ['2', 0]
            }
        }
    },
    4: {
        1: {
            1: {
                0: 'What is the primary color of bananas when they are ripe?',
                1: ['Green', 0],
                2: ['Yellow', 1],
                3: ['Red', 0]
            },
            2: {
                0: 'How many sides does a triangle have?',
                1: ['3', 1],
                2: ['4', 0],
                3: ['5', 0]
            },
            3: {
                0: 'What is the largest ocean in the world?',
                1: ['Indian Ocean', 0],
                2: ['Atlantic Ocean', 0],
                3: ['Pacific Ocean', 1]
            }
        },
        2: {
            1: {
                0: 'What is the primary color of bananas when they are ripe?',
                1: ['Green', 0],
                2: ['Yellow', 1],
                3: ['Red', 0]
            },
            2: {
                0: 'What is the largest ocean in the world?',
                1: ['Indian Ocean', 0],
                2: ['Atlantic Ocean', 0],
                3: ['Pacific Ocean', 1]
            },
            3: {
                0: 'Who wrote the play "Romeo and Juliet"?',
                1: ['Charles Dickens', 0],
                2: ['J.K. Rowling', 0],
                3: ['William Shakespeare', 1]
            },
            4: {
                0: 'Which animal is known as the "King of the Jungle"?',
                1: ['Elephant', 0],
                2: ['Lion', 1],
                3: ['Tiger', 0]
            },
            5: {
                0: 'Which country is famous for the Eiffel Tower?',
                1: ['Italy', 0],
                2: ['France', 1],
                3: ['Spain', 0]
            }
        },
        3: {
            1: {
                0: 'Which country is famous for the Eiffel Tower?',
                1: ['Italy', 0],
                2: ['France', 1],
                3: ['Spain', 0]
            },
            2: {
                0: 'Which animal is known as the "King of the Jungle"?',
                1: ['Elephant', 0],
                2: ['Lion', 1],
                3: ['Tiger', 0]
            },
            3: {
                0: 'What is the largest ocean in the world?',
                1: ['Indian Ocean', 0],
                2: ['Atlantic Ocean', 0],
                3: ['Pacific Ocean', 1]
            },
            4: {
                0: 'Who wrote the play "Romeo and Juliet"?',
                1: ['Charles Dickens', 0],
                2: ['J.K. Rowling', 0],
                3: ['William Shakespeare', 1]
            },
            5: {
                0: 'What is H2O commonly known as?',
                1: ['Salt', 0],
                2: ['Milk', 0],
                3: ['Water', 1]
            },
            6: {
                0: 'How many continents are there on Earth?',
                1: ['7', 1],
                2: ['8', 0],
                3: ['9', 0]
            },
            7: {
                0: 'Which planet is known as the Red Planet?',
                1: ['Pluto', 0],
                2: ['Venus', 0],
                3: ['Mars', 1]
            }
        }
    },
    5: {
        1: {
            1: {
                0: 'Which animal is the largest land mammal?',
                1: ['Elephant', 1],
                2: ['Giraffe', 0],
                3: ['Rhino', 0]
            },
            2: {
                0: 'Which bird is known for its ability to mimic human speech?',
                1: ['Eagle', 0],
                2: ['Owl', 0],
                3: ['Parrot', 1]
            },
            3: {
                0: 'Which animal is known for having a long neck?',
                1: ['Zebra', 0],
                2: ['Giraffe', 1],
                3: ['Kangaroo', 0]
            }
        },
        2: {
            1: {
                0: 'Which animal is known for having a long neck?',
                1: ['Zebra', 0],
                2: ['Giraffe', 1],
                3: ['Kangaroo', 0]
            },
            2: {
                0: 'Which bird is known for its ability to mimic human speech?',
                1: ['Eagle', 0],
                2: ['Owl', 0],
                3: ['Parrot', 1]
            },
            3: {
                0: 'What do pandas mainly eat?',
                1: ['Bamboo', 1],
                2: ['Fish', 0],
                3: ['Insects', 0]
            },
            4: {
                0: 'What is the fastest land animal?',
                1: ['Cheetah', 1],
                2: ['Lion', 0],
                3: ['Horse', 0]
            },
            5: {
                0: 'Which animal is the largest land mammal?',
                1: ['Elephant', 1],
                2: ['Giraffe', 0],
                3: ['Rhino', 0]
            }
        },
        3: {
            1: {
                0: 'What is the fastest land animal?',
                1: ['Cheetah', 1],
                2: ['Lion', 0],
                3: ['Horse', 0]
            },
            2: {
                0: 'How many sides does an Octagon have?',
                1: ['7', 0],
                2: ['8', 1],
                3: ['9', 0]
            },
            3: {
                0: 'What do pandas mainly eat?',
                1: ['Bamboo', 1],
                2: ['Fish', 0],
                3: ['Insects', 0]
            },
            4: {
                0: 'Which marine animal is known for its intelligence?',
                1: ['Shark', 0],
                2: ['Whale', 0],
                3: ['Dolphin', 1]
            },
            5: {
                0: 'Which animal is known as the “Ship of the Desert”?',
                1: ['Horse', 0],
                2: ['Camel', 1],
                3: ['Donkey', 0]
            },
            6: {
                0: 'What type of animal is a frog?',
                1: ['Mammal', 0],
                2: ['Amphibian', 1],
                3: ['Reptile', 0]
            },
            7: {
                0: 'Which bird is known for its ability to mimic human speech?',
                1: ['Eagle', 0],
                2: ['Owl', 0],
                3: ['Parrot', 1]
            }
        }
    },
    6: {
        1: {
            1: {
                0: 'Which singer released the hit song "Shape of You"',
                1: ['Ed Sheeran', 1],
                2: ['Justin Bieber', 0],
                3: ['Shawn Mendes', 0]
            },
            2: {
                0: 'Which superhero is from Wakanda?',
                1: ['Spider-Man', 0],
                2: ['Black Panther', 1],
                3: ['Iron Man', 0]
            },
            3: {
                0: 'What is the name of the lead character in the TV show Breaking Bad?',
                1: ['Tony Soprano', 0],
                2: ['Dexter Morgan', 0],
                3: ['Walter White', 1]
            }
        },
        2: {
            1: {
                0: 'What is the name of the lead character in the TV show Breaking Bad?',
                1: ['Tony Soprano', 0],
                2: ['Dexter Morgan', 0],
                3: ['Walter White', 1]
            },
            2: {
                0: 'What is the name of the fictional wizarding school in the Harry Potter series?',
                1: ['Durmstrang', 0],
                2: ['Hogwarts', 1],
                3: ['Beauxbatons', 0]
            },
            3: {
                0: 'Who played Jack in the movie Titanic?',
                1: ['Leonardo DiCaprio', 1],
                2: ['Brad Pitt', 0],
                3: ['Tom Cruise', 0]
            },
            4: {
                0: 'Which superhero is from Wakanda?',
                1: ['Spider-Man', 0],
                2: ['Black Panther', 1],
                3: ['Iron Man', 0]
            },
            5: {
                0: 'Which singer released the hit song "Shape of You"',
                1: ['Ed Sheeran', 1],
                2: ['Justin Bieber', 0],
                3: ['Shawn Mendes', 0]
            }
        },
        3: {
            1: {
                0: 'Who played Jack in the movie Titanic?',
                1: ['Leonardo DiCaprio', 1],
                2: ['Brad Pitt', 0],
                3: ['Tom Cruise', 0]
            },
            2: {
                0: 'Which singer released the hit song "Shape of You"',
                1: ['Ed Sheeran', 1],
                2: ['Justin Bieber', 0],
                3: ['Shawn Mendes', 0]
            },
            3: {
                0: 'Which superhero is from Wakanda?',
                1: ['Spider-Man', 0],
                2: ['Black Panther', 1],
                3: ['Iron Man', 0]
            },
            4: {
                0: 'Who played Iron Man in the Marvel Cinematic Universe?',
                1: ['Chris Evans', 0],
                2: ['Chris Hemsworth', 0],
                3: ['Robert Downey Jr.', 1]
            },
            5: {
                0: 'What is the name of the lead character in the TV show Breaking Bad?',
                1: ['Tony Soprano', 0],
                2: ['Dexter Morgan', 0],
                3: ['Walter White', 1]
            },
            6: {
                0: 'Which TV show features the characters Ross, Rachel, and Monica?',
                1: ['Friends', 1],
                2: ['The Office', 0],
                3: ['How I Met Your Mother', 0]
            },
            7: {
                0: 'What is the name of the fictional wizarding school in the Harry Potter series?',
                1: ['Durmstrang', 0],
                2: ['Hogwarts', 1],
                3: ['Beauxbatons', 0]
            }
        }
    }
};
export default questions;