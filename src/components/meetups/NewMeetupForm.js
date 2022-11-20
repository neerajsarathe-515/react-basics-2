import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(){

    function submitHandler(){

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" name="title" required id="title"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" name="image" required id="image"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" required id="address"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" required rows="5"  />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;