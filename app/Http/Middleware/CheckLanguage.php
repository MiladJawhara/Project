<?php

namespace App\Http\Middleware;

use Closure;

class CheckLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->has('lan')) {
            app()->setLocale($request['lan']);
        }
        return $next($request);
    }
}
