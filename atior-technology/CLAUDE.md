PS C:\Users\soura\atior-technology> npm run dev

> atior-technology@0.1.0 dev
> next dev

▲ Next.js 16.2.1 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.137.1:3000
✓ Ready in 3.0s

thread 'tokio-runtime-worker' (13816) panicked at turbopack\crates\turbo-persistence\src\static_sorted_file.rs:600:24:range start index 88955426 out of range for slice of length 88941298
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

-----
FATAL: An unexpected Turbopack error occurred. A panic log has been written to C:\Users\soura\AppData\Local\Temp\next-panic-ddf54b56301a889287519662c04404e0.log.

To help make Turbopack better, report this error by clicking here.
-----

Error [TurbopackInternalError]: range start index 88955426 out of range for slice of length 88941298

Debug info:
- Execution of project_fs_operation failed
- range start index 88955426 out of range for slice of length 88941298
    at <unknown> (TurbopackInternalError: range start index 88955426 out of range for slice of length 88941298) {     
  location: 'turbopack\\crates\\turbo-persistence\\src\\static_sorted_file.rs:600:24'
}

PS C:\Users\soura\atior-technology> @AGENTS.md
