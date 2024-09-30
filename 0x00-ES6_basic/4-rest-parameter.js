export default function returnHowManyArguments(...args) {
    let counter = 0;
    for ( let arg in args)
        counter++;

    return counter;

}
