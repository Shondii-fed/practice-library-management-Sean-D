/*
Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.
*/
/*
Tasks

1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
*/
class LibraryItem {
    constructor(title, id, isAvailable) {
        this.title = title
        this.id = id
        this.isAvailable = isAvailable
    }

    checkOut() {
        if (this.isAvailable) {
            console.log(`Enjoy your copy of ${this.title}!`)
            this.isAvailable = false 
        } else {
            console.log(`I'm sorry, ${this.title} is currently unavailable.`)
        }
    }

    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true
            console.log(`Thank you for returning your copy of ${this.title}.`)
        } else {
            console.log(`I'm sorry, this copy of ${this.title} doesn't belong to this library.`)
        }
    }
}
/*
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
*/
class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable)
        this.author = author
        this.genre = genre
    }

    checkOut() {
        if (this.isAvailable) {
            console.log(`\n${this.title} is a ${this.genre} genre book, written by: ${this.author}.`)
        } else {
            null
        }
        super.checkOut()
    }
}

class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration) {
        super(title, id, isAvailable)
        this.director = director
        this.duration = duration
    }

    checkOut() {
        if (this.isAvailable) {
            console.log(`\n${this.title} is directed by ${this.director} with a runtime of ${this.duration} mins.`)
        } else {
            null
        }
        super.checkOut()
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable)
        this.issueNumber = issueNumber
        this.publisher = publisher
    }

    checkOut() {
        if (this.isAvailable) {
            console.log(`\n${this.title} is Issue#${this.issueNumber} and was published by ${this.publisher}.`)
        } else {
            null
        }
        super.checkOut()
    }
}
/*
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
*/
const lordOfTheFlies = new Book('Lord of the Flies', 1001, true, 'William Golding', 'Allegorical')
const avatarFireAndAsh = new DVD('Avatar: Fire and Ash', 2001, true, 'James Cameron', 197)
const reasonsToLoveRock = new Magazine('Rolling Stone: Reasons to Love Rock', 3001, false, 'October 2026', 'Penske Media Corporation')
/*
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/
lordOfTheFlies.checkOut()
avatarFireAndAsh.checkOut()
reasonsToLoveRock.checkOut()

lordOfTheFlies.returnItem()
avatarFireAndAsh.returnItem()
reasonsToLoveRock.returnItem()