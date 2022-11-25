# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super is a way of referencing the initializers in the parent class. For example, if we have a parent class of animal, with initializer parameters of type, legs, and habitat, we can create a child class called Frog and use super to copy those parameters to Frog to save us from having to type them out again. We still have the ability to add unique parameters for Frog that are not included in Animal, perhaps jump_length, flies_eaten, etc. even though we are using super to bring in type, legs, and habitat

Researched answer: Super is a keyword that can be called within a method. When it is called, the code looks for a parent class that contains a method with the same name. if called without any arguments, it will use the arguments from the original parent method. If it is called with arguments, you can leave it empty and it will not grab any of the arguments from the parent, or, you can place only the specific arguments you want to bring down.

2. What is a gem?

Your answer: A gem is a package of code snippets or dependencies that can be installed for use with Ruby. An example of a gem you can install is RSpec, a testing package.

Researched answer: In addition to what I mentioned in my original answer, I would add that RubyGems is a package manager that is used to install and manage gems. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is one in which the data stored have some relationship with each other, reflected in how it is organized, typically in rows and columns. I am sure there are other types of databases, however I primarily have experiences using relational databases. One relational database I've used is country information - the data are organized by their relation to each other, for example each country has the same categories of data that are filled in. For example "Asia" is a value that has a relationship with China, Japan, etc other countries in Asia, as well as a relationship with the category "continent"

Researched answer: It hsould be noted that relational databases are organize with tables and requires the use of primary keys. Some other types of databases besides relational include hierarchical, network, object oriented, and NoSQL.  As opposed to the model of relational databases where every data has a relationship with every other piece fo data, hierarchical databases flow down like a family tree or a pyramid, and children of one parent have no relationship to another parent in the hierarchy.

4. What are primary keys? Why are they important? 

Your answer: Primary keys are unique values used within databases to ensure each piece of data stored in the database can be identified, even if it may share all the same other values as another piece of data. For example, in a huge database like instagram users, there may be many people with the same firsy name, last name, city, etc. However Instagram requires every user to have a unique username/handle, which could potentially serve as the primary key in their database. Primary keys are often numbers, but don't necessarily have to be; for instance in the countries database, each country has a unique three letter identifier.

Researched answer: Another thing to add onto my original answer, is that every primary key is indexed with the columns of data. So each piece of data in a cell has a unique value with the combination of the primary key for that row, and the index for that column.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: CRUD actions include create, read, update, and delete. HTTP has several ways to perform these actions, including "get" (reads) and "delete" (delete). These verbs are methods that HTTP uses to send requests to a server when attempting to fetch elements to populate a browser page.

Researched answer: Some other HTTP verbs include post (create), get (read), put and patch (update), and delete (delete).The HTTP verbs also work in tandom with response codes. For example, if a get request was sent and successful, a 200 code would be returned to indicate the resource had been successfully fetched, which in regards to the CRUD actions would indicate it was read.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: They help map the HTTP methods to the CRUD actions in a standardized way.

2. Ruby on Rails: A full stack framework that lets you code the front and back end of a website. It provides a some pre-built structures that makes coding easier on the developers end.

3. Database migrations: This involves changing the database in some way, such as adding additional columns or the data type of a column.

4. Params: paramas is a keyword in ruby on rails that returns a specific object, which behaves similarly to a hash.

5. ERB: it stands for embedded Ruby and is a feature that allows you to generate text from templates. The output is just text but it can include a mixture of ruby code and text. It can also be used to generate html.
