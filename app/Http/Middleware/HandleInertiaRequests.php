<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $auth = (!$request->user()) ? null :
            [
                'user' => User::with([
                    'permissions:id,name'
                ])
                    ->withTrashed()
                    ->find(auth()->id()),
                'role' => auth()->user()->role
            ];
        return [
            ...parent::share($request),
            'auth' => $auth,
            'app' => [
                'current_route' => Route::currentRouteName()
            ]
        ];
    }
}
