function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}
Employee.prototype.displayName=function(){
    console.log(this.name);
};
    Employee.prototype.increaseAge=function(){
        this.age++;
        console.log(this.age);
    };

    Employee.prototype.decreaseAge=function(){
        this.age--;
        console.log(this.age);
    };

    function Manager(name,age,salary,department){
Employee.call(this,name,age,salary);
this.department=department;
    }

    Manager.prototype=object.create(Employee.prototype);

    Manager.prototype.displayDepartment=function(){
        console.log(this.department);
    };
    Manager.prototype.increaseSalary=function(amount){

    this.Salary+=amount;
    console.log(this.salary);
    }
    Manager.prototype.decreaseSalary=function(amount){
        this.salary-=amount;
        console.log(this.salary);
    };
