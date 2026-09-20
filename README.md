V48 update: Elderly Allowance List ID and HH numbers are clickable. ID opens the main ID Lookup and searches that NIC; HH copies the HH number and opens IWMS Household Search. Main ID Lookup HH click retains the same IWMS behavior. Sri Lankan old/new NIC aliases are supported for ID lookup.

V35 - Vercel + Supabase

1. Open Supabase SQL Editor.
2. Open SUPABASE_SETUP.sql from this ZIP.
3. Copy all SQL and click Run.
4. Deploy this ZIP to Vercel.
5. Do NOT add Vercel Environment Variables for the browser Supabase connection.
6. Do NOT put a Supabase Secret/Service Role key into the app.
7. Test: Add Person -> refresh -> search the ID/House Number from another device.


V43: Added 27 additional Adult Allowance records from the user-provided September 2026 document images. Total Elderly Allowance List records: 136. Search supports NIC, HH Number, Adult Allowance Number, and Name.

V50: ID Lookup search now shows a red 'Elders Allowance' heading under the person's result when an elderly allowance beneficiary exists in the same HH Number.
