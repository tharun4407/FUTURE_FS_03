# TODO: Fix alltrainers errors in Trainers.tsx and Trainersdetails.tsx

## Plan Steps:
- [x] Step 1: Create gym-connect-pro/src/data/trainers.ts with Trainer interface and allTrainers array
- [x] Step 2: Create util getTrainersByIds in trainers.ts
- [x] Step 3: Update gyms.ts - import from trainers.ts, refactor all gym trainers arrays to use getTrainersByIds
- [x] Step 4: Update extra-gyms.ts - import from trainers.ts, refactor all extraGyms trainers arrays
- [x] Step 5: Update Trainers.tsx import to "@/data/trainers"
- [x] Step 6: Update Trainersdetails.tsx imports to "@/data/trainers" (allTrainers) and extra-gyms remains for extraGyms
- [x] Step 7: Test by running dev server

**Task Complete**
