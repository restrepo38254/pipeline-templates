# Azure DevOps Pipeline Templates

This repository contains reusable Azure DevOps pipeline templates used across different projects.
Templates are now organized by type and technology to make reuse easier.

## Repository structure

```
.
├── build/            # legacy build templates
├── deploy/           # legacy deployment templates
├── test/             # legacy test templates
├── templates/
│   ├── ci/
│   │   ├── java/
│   │   └── node/
│   └── cd/
│       ├── java/
│       ├── node/
│       ├── python/
│       ├── php/
│       ├── docker/
│       └── aws/
```

The `templates/` folder hosts the new organized structure. Each technology has
its own folder under `ci` (continuous integration) or `cd` (continuous
deployment). Existing templates remain in the original folders for backward
compatibility.

## Using these templates

Reference the templates in your Azure DevOps pipelines using the `template`
keyword. Examples:

```yaml
# Build Java project
- template: templates/ci/java/maven-build.yml

# Run npm tests
- template: templates/ci/node/npm-test.yml

# Deploy a Java application to EC2
- template: templates/cd/java/ec2-deploy.yml
```

```yaml
# Create PR from work items
- template: templates/ci/pr-from-workitems.yml
  parameters:
    workItemsFile: path/to/workitems.json

    # targetBranch: dev
```

The referenced JSON file should contain the repository name and the list of work item IDs:

```json
{
  "repository": "my-repo",
  "workItems": [12345, 67890]
}
```

More examples can be found inside each technology folder.

## License

This project is licensed under the [MIT License](LICENSE).
