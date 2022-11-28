class AddressBook{
    get name(){returnthis.name};
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
        this._name = name;
        else 
        throw 'Name is incorrect';
    }
    get address(){return this.address};
    set address(address)
    {
        let addressRegex = RegExp('^[#.0-9a-zA-Z\s,-]+$');
        if(addressRegex.test(address))
        this._address = address;
        else 
        throw 'address is incorrect';
    }
    get number(){return this.number};
    set number(number)
    {
        let numberRegex = RegExp('^(91)()[6-9]{1}[0-9]{9}$');
        if(numberRegex.test(number))
        this._number = number;
        else 
        throw 'address is incorrect';
    }
}
let jsonObj ={
    name:"Name",
    address:"Address",
    number:"Number"
};
document.getElementById('form')

