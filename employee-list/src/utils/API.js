import axios from "axios";

export default {
    getUsers: function () {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/?results=50").then((res) => {
                const users = res.data.results;
                const results = users.map((user) => {
                const DOB = user.dob.date.split('T');
                    return {
                        name: `${user.name.first} ${user.name.last}`,
                        email: user.email,
                        image: user.picture.large,
                        phone: user.phone,
                        dob: DOB[0]
                    };
                });
                resolve(results);
            }).catch((err) => reject(err));
        });
    },
}


