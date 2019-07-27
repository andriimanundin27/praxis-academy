let meetup = {
    name: 'JS',
    isActive: true,
    members: 49
};

const scheduleMeetup = (date, place) => {
    meetup.date = date;
    meetup.place = place;

    if (meetup.members < 50) {
        meetup.isActive
    }
}

const publishMeetup = () => {
    if (meetup.isActive) {
        meetup.publish = true;
    }
}

scheduleMeetup('today', 'Bnagalore');
publishMeetup();
console.log(meetup);

// https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5