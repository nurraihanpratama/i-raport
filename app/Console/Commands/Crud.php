<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Crud extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'make:crud {name}';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Create a new Crud set files';

	/**
	 * Execute the console command.
	 */
	public function handle()
	{
		$name = $this->argument('name');

		// CONTROLLER
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Controllers",
			'stubs/crud.controller.stub',
			"Modules/{$name}/Controllers",
			"Modules/{$name}/controllers/{$name}Controller.php"
		);

		// INDEX ACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions",
			'stubs/crud.action.index.stub',
			"Modules/{$name}/Actions",
			"Modules/{$name}/actions/{$name}IndexAction.php"
		);

		// CREATE ACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions",
			'stubs/crud.action.create.stub',
			"Modules/{$name}/Actions",
			"Modules/{$name}/actions/{$name}CreateAction.php"
		);

		// STORE ACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions",
			'stubs/crud.action.store.stub',
			"Modules/{$name}/Actions",
			"Modules/{$name}/actions/{$name}StoreAction.php"
		);

		// EDIT ACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions",
			'stubs/crud.action.edit.stub',
			"Modules/{$name}/Actions",
			"Modules/{$name}/actions/{$name}EditAction.php"
		);

		// UPDATE ACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions",
			'stubs/crud.action.update.stub',
			"Modules/{$name}/Actions",
			"Modules/{$name}/actions/{$name}UpdateAction.php"
		);

		// DESTROY ACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions",
			'stubs/crud.action.destroy.stub',
			"Modules/{$name}/Actions",
			"Modules/{$name}/actions/{$name}DestroyAction.php"
		);

		// BUILD DATA SUBACTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Actions\\SubActions",
			'stubs/crud.action.builddata.stub',
			"Modules/{$name}/Actions/SubActions",
			"Modules/{$name}/actions/subActions/Build{$name}Data.php"
		);

		// MODEL
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Models",
			'stubs/crud.model.stub',
			"Modules/{$name}/Models",
			"Modules/{$name}/Models/{$name}.php"
		);

		// REQUEST
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Requests",
			'stubs/crud.request.stub',
			"Modules/{$name}/Requests",
			"Modules/{$name}/Requests/{$name}Request.php"
		);

		// RESOURCES - ALL COLLECTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Resources",
			'stubs/crud.resources.collection.stub',
			"Modules/{$name}/Resources",
			"Modules/{$name}/Resources/{$name}Collection.php"
		);

		// RESOURCES - ALL RESOURCE
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Resources",
			'stubs/crud.resources.resource.stub',
			"Modules/{$name}/Resources",
			"Modules/{$name}/Resources/{$name}Resource.php"
		);

		// RESOURCES - SINGLE COLLECTION
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Resources",
			'stubs/crud.resources.collection.stub',
			"Modules/{$name}/Resources",
			"Modules/{$name}/Resources/Single{$name}Collection.php"
		);

		// RESOURCES - SINGLE RESOURCE
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Resources",
			'stubs/crud.resources.resource.stub',
			"Modules/{$name}/Resources",
			"Modules/{$name}/Resources/Single{$name}Resource.php"
		);

		// ROUTE
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Routes",
			'stubs/crud.route.stub',
			"Modules/{$name}/Routes",
			"Modules/{$name}/Routes/web.php"
		);

		// TABLE
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Table",
			'stubs/crud.table.stub',
			"Modules/{$name}/Table",
			"Modules/{$name}/Table/{$name}DataTable.php"
		);

		// FRONTEND - INDEX PAGE
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Frontend",
			'stubs/crud.frontend.index-page.stub',
			"js/Pages/Public/{$name}",
			"js/Pages/Public/{$name}/Index.jsx",
			'frontend'
		);

		// FRONTEND - DATATABLE
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Frontend",
			'stubs/crud.frontend.datatable.stub',
			"js/Pages/Public/{$name}/Components/DataTable",
			"js/Pages/Public/{$name}/Components/DataTable/{$name}DataTable.jsx",
			'frontend'
		);

		// FRONTEND - ACTIONS
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Frontend",
			'stubs/crud.frontend.actions.stub',
			"js/Pages/Public/{$name}/Components/DataTable",
			"js/Pages/Public/{$name}/Components/DataTable/{$name}Actions.jsx",
			'frontend'
		);

		// FRONTEND - FILTER
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Frontend",
			'stubs/crud.frontend.filter.stub',
			"js/Pages/Public/{$name}/Components/DataTable",
			"js/Pages/Public/{$name}/Components/DataTable/{$name}Filter.jsx",
			'frontend'
		);

		// FRONTEND - FORM
		$this->createFile(
			$name,
			"App\\Modules\\{$name}\\Frontend",
			'stubs/crud.frontend.form.stub',
			"js/Pages/Public/{$name}/Components/Form",
			"js/Pages/Public/{$name}/Components/Form/{$name}Form.jsx",
			'frontend'
		);

		$this->info("{$name} crud created successfully!");
	}

	public function createFile(
		$name,
		$namespace,
		$stubs,
		$directory_path,
		$file_path,
		$position = 'backend',
	) {
		// Get the contents of the stub file
		$stub = file_get_contents($stubs);

		// Derive a slug from the class name
		$slug = strtolower(preg_replace('/\B([A-Z])/', '-$1', $name));

		// Replace placeholders with actual values
		$stub = str_replace('{{ namespace }}', $namespace, $stub);
		$stub = str_replace('{{ class }}', $name, $stub);
		$stub = str_replace('{{ classNameSlug }}', $slug, $stub);

		// Define the path for the new file
		if ($position == 'backend') {
			$directory = app_path($directory_path);
		}

		if ($position == 'frontend') {
			$directory = resource_path($directory_path);
		}

		// Create the directory if it doesn't exist
		if (!is_dir($directory)) {
			mkdir($directory, 0755, true);
		}

		// Define the path for the new file
		if ($position == 'backend') {
			$path = app_path($file_path);
		}

		if ($position == 'frontend') {
			$path = resource_path($file_path);
		}

		// Write the content to the new file
		file_put_contents($path, $stub);
	}
}


	// $namespace = "App\\Modules\\{$name}\\Controller\\{$name}Controller";

		// // Get the contents of the stub file
		// $stub = file_get_contents('stubs/crud.controller.stub');

		// // Replace placeholders with actual values
		// $stub = str_replace('{{ namespace }}', $namespace, $stub);
		// $stub = str_replace('{{ class }}', $name, $stub);

		// // Define the path for the new file
		// $directory = app_path("Modules/{$name}/controllers");

		// // Create the directory if it doesn't exist
		// if (!is_dir($directory)) {
		// 	mkdir($directory, 0755, true);
		// }

		// // Define the path for the new file
		// $path = app_path("Modules/{$name}/controllers/{$name}Controller.php");

		// // Write the content to the new file
		// file_put_contents($path, $stub);