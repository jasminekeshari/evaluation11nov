function Employee(name,age,gender,salary){
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.salary=salary;
}
Employee.prototype.displayName=function(){
  console.log(this.name);
};
Employee.prototype.displayAge=function(){
  console.log(this.age);
};
Employee.prototype.increaseAge=function(){
  this.age++;
  console.log(this.age);
};
Employee.prototype.decreaseAge=function(){
  this.age--;
  console.log(this.age);
};
Employee.prototype.displaySalary=function(){
  console.log(this.Salary);
};

function Manager(name,age,gender,salary,department){
  Employee.call(this,name,age,gender,salary);
  this.department=department;
}
Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.displayDepartment=function(){
  console.log(this.department);
};
Manager.prototype.increaseSalary=function(amount){
  this.salary+=amount;
  console.log(this.salary);
};
Manager.prototype.decreaseSalary=function(amount){
  this.salary-=amount;
  console.log(this.salary);
};
                 
