<?php

namespace Tests\Feature;

use App\Console\Commands\SendEmails;
use App\Mail\UserNotify;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class SendEmailsTest extends TestCase
{
    use RefreshDatabase;

    public function testユーザーにメール送信されること(): void
    {
        Mail::fake();

        User::factory(10)->create();

        Artisan::call(SendEmails::class);

        Mail::assertSent(UserNotify::class, 10);
    }
}
