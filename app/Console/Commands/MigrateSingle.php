<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\Console\Migrations\MigrateCommand;
use Illuminate\Support\Facades\Artisan;

class MigrateSingle extends Command
{
    protected $signature = 'migrate:single {file}';
    protected $description = 'Run a single migration file';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $file = $this->argument('file');
        $path = database_path('migrations/' . $file);

        if (!file_exists($path)) {
            $this->error('Migration file does not exist.');
            return 1;
        }

        Artisan::call('migrate', ['--path' => 'database/migrations/' . $file]);
        $this->info('Migration completed.');
    }
}
