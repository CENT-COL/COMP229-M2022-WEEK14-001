export class MyClass {
    /**
     * MyMethod
     * * Important information is highlighted
     * ! Deprecated method, do not use
     * TODO: refactor this method 
     * @param myParam Parameter for this method
     */
    MyMthod(myParam) {
        let myVar = 123;
        
        //* This is highlighted
        if(myVar > 0){
            throw new TypeError(); //! This is an alert
        }
    }
}