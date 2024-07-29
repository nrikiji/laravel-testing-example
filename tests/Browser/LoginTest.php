<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function testログインできること(): void
    {
        $user = User::factory()->create();

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
                ->waitFor('button', 5)
                ->type('email', $user->email)
                ->type('password', 'password')
                ->click('button')
                ->pause(1000)
                ->assertPathIs('/dashboard');
        });
    }
}
