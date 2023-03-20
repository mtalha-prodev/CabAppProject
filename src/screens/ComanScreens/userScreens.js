// import UserDetails from './user/UserDetails';
// import UserPassword from './user/UserPassword';

export const {default: UserLogin} = require('../user/authScreen/UserLogin');
export const {default: UserWelcome} = require('../user/UserWelcome');
export const {default: UserDetails} = require('../user/authScreen/UserDetails');
export const {
  default: UserPassword,
} = require('../user/authScreen/UserPassword');
export const {default: UserPhone} = require('../user/authScreen/UserPhone');
export const {default: UserOtp} = require('../user/authScreen/UserOtp');

export const {default: SearchLocation} = require('../user/SearchLocation');
export const {default: MapDirections} = require('../user/MapDirections');
export const {default: ConfirmRaide} = require('../user/ConfirmRaide');
export const {default: ChatScreen} = require('../user/ChatScreen');

// user profile details
export const {default: UserProfile} = require('../user/profile/UserProfile');
export const {default: EditAccount} = require('../user/profile/EditAccount');
export const {default: RateUs} = require('../user/profile/Rateus');
export const {default: ShareApp} = require('../user/profile/ShareApp');
export const {default: UserContact} = require('../user/profile/UserContact');
export const {default: UserHelp} = require('../user/profile/UserHelp');
export const {
  default: UserNotification,
} = require('../user/profile/UserNotification');
export const {default: UserSetting} = require('../user/profile/UserSetting');
export const {
  default: UserMainScreen,
} = require('../user/profile/UserMainScreen');

// user payment methods
export const {default: Wallet} = require('../user/Payment/Wallet');
export const {
  default: PaymentMethod,
} = require('../user/Payment/PaymentMethod');
export const {
  default: PaymentDetails,
} = require('../user/Payment/PaymentDetails');
export const {default: PaymentEdit} = require('../user/Payment/PaymentEdit');
// user trips detail
export const {default: Trips} = require('../user/userTrips/Trips');
export const {default: TripDetails} = require('../user/userTrips/TripDetails');
