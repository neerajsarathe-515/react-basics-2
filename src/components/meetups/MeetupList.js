import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
import Card from "../ui/Card";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            { props.meetups.map((meetup) => (
                <Card>
                    <MeetupItem
                        key={meetup.id}
                        id={meetup.id}
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}
                    />
                </Card>
            ))}
        </ul>
    );
}

export default MeetupList;