// import * as passport from 'passport';
// import * as passport_Jwt from 'passport-jwt';
// import { User } from '../models/user';

// const JwtStrategy = passport_Jwt.Strategy;
// const { ExtractJwt } = passport_Jwt;

// passport.use(new JwtStrategy({
//     jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//     secretOrKey: 'autobookauthentication'
// }, async (payload, done) => {

//     try {
//         // Find the user specified in token
//         const user = await User.findById(payload.sub);

//         // If user doesn't exists handle it 
//         if (!user) {
//             return done(null, false);
//         }
//         //otherwise, retun the user
//         done(null, user);
//     } catch (error) {
//         done(error, false);
//     }
// }));