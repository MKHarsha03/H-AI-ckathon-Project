export default function Home(){
    return(
        <>
            <form action="http://127.0.0.1:5000/submit" method='post'>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"/><br/><br/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    
    );
}