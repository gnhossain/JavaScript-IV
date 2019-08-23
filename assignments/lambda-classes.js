// CODE here for your Lambda Classes

  class Person{
      constructor(Attr){
          this.newName = Attr.name
          this.newAge = Attr.age
          this.newLocation = Attr.location
      }
      speak(){
          return console.log(`Hello my name is ${this.newName}, I am from ${this.newLocation}`);
      }
  }

  class Instructor extends Person{
      constructor(instructorAttr){
          super (instructorAttr);
          this.specialty = instructorAttr.specialty;
          this.favLanguage = instructorAttr.favLanguage;
          this.catchPhrase = instructorAttr.catchPhrase;

      }
      demo(subject){
          return console.log(`Today we are learning about ${subject}`);
      }
      grade(student, subject){
          return console.log(`${student.name}receives a perfect score on ${subject}`); 
      }
  }

  class Student extends Person{
      constructor(studentAttr){
        super (studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;

      }
      listsSubjects(){
      return this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject){
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        return console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }


  }

  class PM extends Instructor{
      constructor(pmAttr){
          super(pmAttr);
          this.gradClassName = pmAttr.gradClassName;
          this.favInstructor = pmAttr.favInstructor;
          
      }
      standUp(channel){
        return console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
      debugsCode(student, subject){
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }
