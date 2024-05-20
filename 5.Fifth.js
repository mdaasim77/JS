// Building a Shipment applicaton with using switch case 

let packagetype= 'express';

switch (packagetype) {

    case 'standard':
        console.log('The Package deliverd in 3-5 days');
        
        break;
    
        case 'express':
        console.log('The Package delivered in 1-2 days');
        
        break;
    
        case 'overnight':
        console.log('The Package delivered Tomorrow');
        break;

    default:
        console.log('Invalid Package');
        break;
}