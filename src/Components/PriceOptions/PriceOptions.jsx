import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {
    
        const gymBroo = [
          {
            "id": 1,
            "name": "Fitness Paradise",
            "location": "123 Main Street, Cityville",
            "price": 49.99,
            "features": [
              "24/7 Access",
              "Cardio Machines",
              "Strength Training",
              "Group Classes",
              "Personal Training",
              "Sauna",
              "Swimming Pool",
              "Locker Rooms",
              "Free Towel Service"
            ]
          },
          {
            "id": 2,
            "name": "PowerFit Gym",
            "location": "456 Oak Avenue, Townsville",
            "price": 59.99,
            "features": [
              "24/7 Access",
              "Cardio Machines",
              "Strength Training",
              "Sauna",
              "Nutrition Counseling",
              "Group Classes",
              "Indoor Track",
              "Cycling Studio",
              "Childcare Services"
            ]
          },
          {
            "id": 3,
            "name": "Flex Fitness Center",
            "location": "789 Pine Road, Villagetown",
            "price": 64.99,
            "features": [
              "24/7 Access",
              "Cardio Machines",
              "Strength Training",
              "Yoga Classes",
              "Childcare Services",
              "Steam Room",
              "Climbing Wall",
              "Outdoor Training Area",
              "Personalized Workout Plans"
            ]
          },
          {
            "id": 4,
            "name": "Elite Fitness Hub",
            "location": "101 Oak Street, Suburbia",
            "price": 54.99,
            "features": [
              "24/7 Access",
              "Cardio Machines",
              "Strength Training",
              "Pilates Classes",
              "Fitness Assessments",
              "Protein Bar",
              "Sports Massage",
              "CrossFit Area",
              "Member Events"
            ]
          },
          {
            "id": 5,
            "name": "Wellness Junction",
            "location": "876 Maple Lane, Countryside",
            "price": 69.99,
            "features": [
              "24/7 Access",
              "Cardio Machines",
              "Strength Training",
              "Mindfulness Workshops",
              "Nutrition Seminars",
              "Poolside Yoga",
              "Health Cafe",
              "Personal Wellness Coaches",
              "Recovery Lounge"
            ]
          }
          
        ];
      
      
    return (
        <div>

            <h3 className="text-4xl">Being a Gymbro</h3>
            {
                gymBroo.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        
            
        </div>
    );
};

export default PriceOptions;