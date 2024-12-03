$filepath = './Rawi18nFile.csv'

# Download CSV from Google Sheets (make sure the link is accessible and the correct format)
& { 
    (new-object net.webclient).downloadfile('https://docs.google.com/spreadsheets/d/15XuBHrzG2Fg3HEEzTQ6f_ehHaGoDuU3-sOlpiNvsfpA/export?format=csv', $filepath)
}

$translate = @{}

# Import CSV and process each row
$NewCsvData = Import-CSV $filepath | ForEach-Object {
    $module = $_.Module
    $key = $_.Key

    # Iterate over all language columns dynamically (skip "Module" and "Key" columns)
    $langs = $_ | Get-Member -MemberType Properties | Where-Object { $_.Name -notin @('Module', 'Key') } | Select-Object -ExpandProperty Name
    
    foreach ($lang in $langs) {
        $value = $_."$lang"
        
        # If the value exists for the language, add it to the translations
        if ($value) {
            # Initialize the language dictionary if it doesn't exist
            if (-not $translate.ContainsKey($lang)) {
                $translate[$lang] = @{}
            }

            # Initialize the module dictionary under the language if it doesn't exist
            if (-not $translate[$lang].ContainsKey($module)) {
                $translate[$lang][$module] = @{}
            }

            # Add the key-value pair to the module for the given language
            $translate[$lang][$module][$key] = $value
        }
    }
}

# Generate i18n JSON files for each language (dynamically created based on CSV columns)
foreach ($lang in $translate.Keys) {
    # Convert to JSON and escape any special characters
    $jsonContent = $translate[$lang] | ConvertTo-Json -Depth 3 | ForEach-Object { 
        [System.Text.RegularExpressions.Regex]::Unescape($_) 
    }

    # Write JSON to output folder (create it if necessary)
    $outputDir = "./public/messages"
    if (-not (Test-Path -Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force
    }

    # Save the JSON content to a file named after the language code (e.g., zh-cn.json)
    $jsonContent | Out-File -FilePath "$outputDir/$lang.json" -Force -Encoding UTF8
}

# Delete the CSV file after processing
Remove-Item $filepath -Force
