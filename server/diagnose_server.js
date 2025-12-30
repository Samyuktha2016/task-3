const deps = ['express', 'cors', 'dotenv', 'mongoose'];
console.log('--- START DIAGNOSIS ---');
deps.forEach(dep => {
    try {
        require(dep);
        console.log(`✅ ${dep} loaded`);
    } catch (e) {
        console.error(`❌ ${dep} FAILED: ${e.message}`);
    }
});
try {
    require('./config/db');
    console.log('✅ ./config/db loaded');
} catch (e) {
    console.error(`❌ ./config/db FAILED: ${e.message}`);
}
try {
    require('./routes/taskRoutes');
    console.log('✅ ./routes/taskRoutes loaded');
} catch (e) {
    console.error(`❌ ./routes/taskRoutes FAILED: ${e.message}`);
}
console.log('--- END DIAGNOSIS ---');
