<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRoleIsExisting
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
	 * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
	 */
	public function handle(Request $request, Closure $next)
	{
		if (auth()->user()->role != $request->role) {
			return redirect()->route('login');
		}
		// abort_if(
		// 	auth()->user()->currentTeam->slug != $request->team,
		// 	403,
		// 	'ANDA TIDAK MEMILIKI AKSES KE HALAMAN INI'
		// );
		return $next($request);
	}
}
