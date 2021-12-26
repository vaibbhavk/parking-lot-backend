const parkingSpotType = {
  0: "Handicapped",
  1: "Compact",
  2: "Large",
  3: "Motorbike",
  4: "Electric",
};

const parkingSpotFree = {
  0: "No",
  1: "Yes",
};

const vehicleType = {
  0: "Car",
  1: "Truck",
  2: "Electric",
  3: "Van",
  4: "Motorbike",
};

const parkingTicketStatus = {
  0: "Active",
  1: "Paid",
  2: "Lost",
};

const paymentStatus = {
  0: "Done",
  1: "Pending",
  2: "Failed",
};

const userType = {
  0: "Admin",
  1: "Attendant",
};

module.exports = {
  parkingSpotType,
  vehicleType,
  parkingTicketStatus,
  paymentStatus,
};
